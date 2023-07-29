import { useParams } from "react-router";
import styles from "./SingleVideo.module.css";
import { useData } from "../../contexts/DataContext";
import SingleVideoLayout from "../../components/SingleVideoLayout/SingleVideoLayout";
import { MdWatchLater } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const SingleVideo = () => {
  const [newNote, setNewNote] = useState({
    id: null,
    note: "",
  });
  const [newPlayList, setNewPlayList] = useState({
    id: null,
    name: "",
  });
  const { videoId } = useParams();
  const {
    data: { videos, playList },
    dispatch,
  } = useData();

  const singleVideoSelected = videos.find((video) => video?._id == videoId);

  const {
    _id,
    title,
    views,
    chips,
    thumbnail,
    src,
    category,
    creator,
    watchList,
    noteList,
  } = singleVideoSelected;

  function handleWatchLater(id) {
    dispatch({ type: "TOGGLE_WATCHLATER", payload: id });
  }

  function openNotesModal() {
    document.querySelector("#NoteModal").showModal();
  }

  function openPlayListModal() {
    document.querySelector("#PlayList").showModal();
  }

  function handleNewNote(e) {
    setNewNote({ id: uuid(), note: e.target.value });
  }

  function handleNewPlaylist(e) {
    setNewPlayList({ id: uuid(), name: e.target.value });
  }

  function handleAddNote(id, newNote) {
    // console.log(newNote);
    dispatch({ type: "ADD_NOTE", payload: { newNote, id } });
    setNewNote({ id: null, note: "" });
  }

  function handleDeleteNote(noteId, videoId) {
    console.log(noteId, videoId);
    dispatch({ type: "DELETE_NOTE", payload: { noteId, videoId } });
  }

  function handleAddPlayList(newPlayList) {
    console.log(newPlayList);
    dispatch({ type: "ADD_PLAYLIST", payload: newPlayList });
  }

  return (
    <>
      <SingleVideoLayout>
        <div className={styles.singleVideoCont}>
          <iframe
            width="560"
            height="315"
            src={src}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className={styles.videoDetails}>
            <div className={styles.videoTitleCont}>
              <img src="https://picsum.photos/40/40" alt="asd" />
              <h4>{title}</h4>
            </div>
            <div
              className={styles.singleVideoIconCont}
              style={{ cursor: "pointer" }}
            >
              <MdWatchLater
                style={{ color: watchList ? "red" : "" }}
                onClick={() => handleWatchLater(_id)}
                className={styles.icons}
              />
              <MdPlaylistAdd
                onClick={openPlayListModal}
                className={styles.icons}
              />
              <MdEditNote onClick={openNotesModal} className={styles.icons} />
            </div>
          </div>
          <div className={styles.notesCont}>
            <h3>My Notes</h3>
            <div className={styles.noteList}>
              {noteList?.map((note) => (
                <div key={note.id} className={styles.noteCont}>
                  <div>{note.note}</div>
                  <div onClick={() => handleDeleteNote(note.id, _id)}>
                    <MdDelete fontSize={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <dialog id="NoteModal">
            <form method="dialog" className={styles.notesModal}>
              <input
                type="text"
                value={newNote.note}
                onChange={(e) => handleNewNote(e)}
              />
              <button onClick={() => handleAddNote(_id, newNote)}>
                Add new Notes
              </button>
              <button>Close</button>
            </form>
          </dialog>
          <dialog id="PlayList">
            <h3>Add to playlist</h3>
            <div className={styles.playListCont}>
              {playList.map((play) => (
                <div key={play.name} className={styles.playlistItem}>
                  <div>{play.name}</div>
                  <div>X</div>
                </div>
              ))}
            </div>
            <form method="dialog" className={styles.playlistForm}>
              <input
                type="text"
                value={newPlayList.name}
                placeholder="enter playlist title"
                onChange={(e) => handleNewPlaylist(e)}
              />
              <button onClick={() => handleAddPlayList(newPlayList)}>
                Create new playlist
              </button>
              <button>Close</button>
            </form>
          </dialog>
        </div>
      </SingleVideoLayout>
    </>
  );
};

export default SingleVideo;
