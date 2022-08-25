import React from "react";

function NoteForm({ onInputForm, OnSubmitForm, inputForm, limitCharTitle }) {
    return (
        <form onSubmit={OnSubmitForm}>
            <p className="note-input__title__char-limit">
                Sisa karakter: {limitCharTitle - inputForm.title.length}
            </p>
            <input
                className="note-input__title"
                type="text"
                name="title"
                placeholder="Ini adalah judul ..."
                autoComplete="off"
                required
                onChange={(e) => onInputForm(e)}
                value={inputForm.title}
            />
            <textarea
                className="note-input__body"
                type="text"
                name="body"
                placeholder="Tuliskan catatanmu di sini ..."
                autoComplete="off"
                required
                onChange={(e) => onInputForm(e)}
                value={inputForm.body}
            >

            </textarea>
            <button type="submit">Buat</button>
        </form>
    );
};

export default NoteForm;