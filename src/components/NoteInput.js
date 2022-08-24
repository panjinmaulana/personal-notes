import React from "react";
import NoteForm from "./NoteForm";

function NoteInput() {
    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <NoteForm />
        </div>
    );
};

export default NoteInput;