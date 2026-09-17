import {formatDate} from "./utils.js"

const formattedDate = formatDate(new Date())

const dateEl = document.getElementById("date")
if (dateEl) dateEl.textContent = formattedDate