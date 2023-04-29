const intext = document.getElementById("memo-input")
const add_button = document.getElementById("add-button")
const outtext = document.getElementById("memo-container")

add_button.onclick = function () {
  let memo = document.createElement("div")
  memo.className = "memo"
  memo.textContent = intext.value
  outtext.append(memo)
}
