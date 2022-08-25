import React from "react";
import NoteForm from "./NoteForm";

function NoteInput({ onInputForm, OnSubmitForm, inputForm, limitCharTitle }) {
    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <NoteForm
                onInputForm={onInputForm}
                OnSubmitForm={OnSubmitForm}
                inputForm={inputForm}
                limitCharTitle={limitCharTitle}
            />
        </div>
    );
};

export default NoteInput;