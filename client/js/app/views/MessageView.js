class MessageView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    return data.message ? `<p class="alert">${data.message}</p>` : '<p></p>';
  }
}
