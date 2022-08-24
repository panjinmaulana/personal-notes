import React from "react";
import { getInitialData, showFormattedDate } from '../utils/index';

function PersonalNotesApp() {
    const notes = getInitialData();

    return (
        <>
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input type="text" placeholder="Cari catatan ..." />
                </div>
            </div>
            <div className="note-app__body">
                <div className="note-input">
                    <h2>Buat Catatan</h2>
                    <form>
                        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                        <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." autoComplete="off" required />
                        <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." autoComplete="off" required></textarea>
                        <button type="submit">Buat</button>
                    </form>
                </div>
                {
                    notes.length
                        ?
                        <>
                            <h2>Catatan Aktif</h2>
                            <div className="notes-list">
                                {notes.map((note) => <div className="note-item">
                                    <div className="note-item__content">
                                        <h3 className="note-item__title">{note.title}</h3>
                                        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                                        <p className="note-item__body">{note.body}</p>
                                    </div>
                                    <div className="note-item__action">
                                        <button className="note-item__delete-button">Delete</button>
                                        <button className="note-item__archive-button">Arsipkan</button>
                                    </div>
                                </div>)}
                            </div>
                        </>
                        :
                        <p className="notes-list__empty-message">Tidak ada catatan</p>
                }
                {
                    notes.length
                        ?
                        <>
                            <h2>Arsip</h2>
                            <div className="notes-list">
                                {notes.map((note) => <div className="note-item">
                                    <div className="note-item__content">
                                        <h3 className="note-item__title">{note.title}</h3>
                                        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                                        <p className="note-item__body">{note.body}</p>
                                    </div>
                                    <div className="note-item__action">
                                        <button className="note-item__delete-button">Delete</button>
                                        <button className="note-item__archive-button">Arsipkan</button>
                                    </div>
                                </div>)}
                            </div>
                        </>
                        :
                        <p className="notes-list__empty-message">Tidak ada catatan</p>
                }
            </div>
        </>
    );
};

export default PersonalNotesApp;