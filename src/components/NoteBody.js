import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListEmptyMessage from "./NoteListEmptyMessage";

function NoteBody({ notes, archivedNotes, onDelete, onArchive, onInputForm, OnSubmitForm, inputForm, limitCharTitle }) {
    return (
        <div className="note-app__body">
            <NoteInput
                onInputForm={onInputForm}
                OnSubmitForm={OnSubmitForm}
                inputForm={inputForm}
                limitCharTitle={limitCharTitle}
            />
            <h2>Catatan Aktif</h2>
            {
                notes.length
                    ?
                    <NoteList
                        notes={notes}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                    :
                    <NoteListEmptyMessage />
            }
            <h2>Arsip</h2>
            {
                archivedNotes.length
                    ?
                    <NoteList
                        notes={archivedNotes}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                    :
                    <NoteListEmptyMessage />
            }
        </div>
    );
};

export default NoteBody;