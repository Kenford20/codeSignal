// You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

// Given the starting HTML tag, find the appropriate end tag which your editor should propose.

// If you are not familiar with HTML, consult with this note.

function htmlEndTagByStartTag(startTag) {
    return '</' + startTag.slice(1, startTag.indexOf(' ')) + ">";
}
