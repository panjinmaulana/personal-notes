import React from "react";

function NoteForm() {
    return (
        <form>
            <p className="note-input__title__char-limit">Sisa karakter: 50</p>
            <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." autoComplete="off" required />
            <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." autoComplete="off" required></textarea>
            <button type="submit">Buat</button>
        </form>
    );
};

export default NoteForm;