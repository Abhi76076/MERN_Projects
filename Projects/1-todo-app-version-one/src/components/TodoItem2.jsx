function TodoItem2() {
  let TodoName = " Buy Go to college";
  let TodoDate = "04/08/2024";
  return (
    <div class="container">
      <div class="row ak-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button " class="btn btn-danger ak-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
