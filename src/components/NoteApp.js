import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from "../utils/index";
class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            archivedNotes: [],
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    };

    onDeleteHandler(id, isArchived) {
        if (isArchived) {
            const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
            this.setState({ archivedNotes });
        } else {
            const notes = this.state.notes.filter(note => note.id !== id);
            this.setState({ notes });
        };
    };

    onArchiveHandler(id) {
        const archivedNotes = this.state.notes
            .filter(note => note.id === id)
            .map((note) => {
                return { ...note, archived: true }
            });

        this.setState((previousState) => {
            return {
                archivedNotes: [...previousState.archivedNotes, ...archivedNotes],
            };
        });

        this.onDeleteHandler(id);
    };

    onSearchHandler(keyword) {
        let notesList = getInitialData();

        notesList = notesList.filter(note => {
            return note.title.toLowerCase().includes(keyword.toLowerCase());
        });

        this.setState({ notes: notesList });
    };

    render() {
        return (
            <>
                <NoteHeader
                    onSearch={this.onSearchHandler}
                />
                <NoteBody
                    notes={this.state.notes}
                    archivedNotes={this.state.archivedNotes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
            </>
        );
    };
};

export default NoteApp;