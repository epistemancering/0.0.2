import react from "react"
import reactDOM from "react-dom/client"
import axios from "axios"
reactDOM.createRoot(document.querySelector("div")).render(<react.StrictMode>
  <App />
</react.StrictMode>)
function App() {
  let expression = react.useRef()
  let style = react.useRef()
  let img = react.useRef()
  // let Descriptor = react.useRef()
  // let clothing = react.useRef()
  // let item = react.useRef()
  // let descriptor = react.useRef()
  return <>
    <form onSubmit = {async function(event) {
      event.preventDefault()
      if (expression.current.value === "funny") {
        if (style.current.value === "abstract") {
          img.current.src = "images/funnyAbstract"
        } else {
          img.current.src = "images/funnyPhotorealistic"
        }
      } else {
        if (style.current.value === "abstract") {
          img.current.src = "images/sadAbstract"
        } else {
          img.current.src = "images/sadPhotorealistic"
        }
      }
      // img.current.src = await axios.post("https://website.com/path", { Descriptor: Descriptor.current.value, clothing: clothing.current.value, item: item.current.value, descriptor: descriptor.current.value })
    }}>
      <select ref = {expression}>
        <option>
          funny
        </option>
        <option>
          sad
        </option>
      </select>
      <select ref = {style}>
        <option>
          abstract
        </option>
        <option>
          photorealistic
        </option>
      </select>
      {/* <input ref = {Descriptor} placeholder = {"Descriptor"} />
      <input ref = {clothing} placeholder = {"clothing"} />
      <input ref = {item} placeholder = {"item"} />
      <input ref = {descriptor} placeholder = {"descriptor"} /> */}
      <button>
        diffuse
      </button>
    </form>
    <img ref = {img} />
  </>
}