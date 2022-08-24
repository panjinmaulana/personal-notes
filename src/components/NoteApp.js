import React from "react";
import { getInitialData, showFormattedDate } from '../utils/index';
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

function PersonalNotesApp() {
    const notes = getInitialData();

    return (
        <>
            <NoteHeader />
            <NoteBody notes={notes} showFormattedDate={showFormattedDate} />
        </>
    );
};

export default PersonalNotesApp;