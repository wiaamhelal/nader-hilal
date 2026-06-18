import swal from "sweetalert";

const LanguageSwitcher = () => {
  const changeLanguage = (langCode) => {
    const selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
      selectField.value = langCode;
      selectField.dispatchEvent(new Event("change"));
    }
  };

  // const reloud = () => {
  //   swal({
  //     title: "change the language?",
  //     text: "if the language didnt changed try again",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       window.location.reload(false);
  //     }
  //   });
  //   // setTimeout(() => {

  //   // }, 1000);
  // };
  return (
    <div className="p-2">
      <button
        className="btn  btn-sm d-block mb-2"
        onClick={() => changeLanguage("ar")}
        style={{ backgroundColor: " #b89564", color: "white" }}
      >
        arabic
      </button>
      <button
        className="btn  btn-sm d-block mb-2"
        onClick={() => changeLanguage("en")}
        style={{ backgroundColor: " #b89564", color: "white" }}
      >
        English
      </button>
      <button
        className="btn  btn-sm d-block"
        onClick={() => changeLanguage("fr")}
        style={{ backgroundColor: " #b89564", color: "white" }}
      >
        frunch
      </button>
    </div>
  );
};

export default LanguageSwitcher;
