import "./index.css";

function InputButtons() {
  return (
    <div>
      <form class="form">
        <label class="form-label" for="email">
          Email Address:
        </label>
        <br />
        <input
          type="email"
          class="form-control"
          placeholder="@email.com"
          id="email"
        />
      </form>
      <form class="form">
        <label class="form-label" for="Password">
          Password:
        </label>
        <br />
        <input
          type="text"
          class="form-control"
          placeholder="password"
          id="Password"
        />
      </form>
      <form class="form">
        <label for="formFile" class="form-label">
          File input example
        </label>
        <br />
        <input class="form-control" type="file" id="formFile" />
      </form>
    </div>
  );
}

export default InputButtons;
