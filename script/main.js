const startClock = () => {
    const now = new Date();
    const h = padWithZeroes(now.getHours(), 2);
    const m = padWithZeroes(now.getMinutes(), 2);
    const s = padWithZeroes(now.getSeconds(), 2);
    document.getElementById("current-time").innerHTML = `${h}:${m}:${s}`;
    setTimeout(startClock, 500);
  };
  
  const padWithZeroes = (input, length) => {
    let padded = input;
    if (typeof input !== "string") padded = input.toString();
    return padded.padStart(length, "0");
  };


  let dateToday = document.getElementById("date-today");

  let today = new Date();
  let day = `${today.getDate()<10 ? "0" : ""} ${today.getDate()}`;

    let month = `${(today.getMonth() + 1) <10 ?"0":""} ${today.getMonth() + 1}`;
    let year = today.getFullYear();

    dateToday.innerHTML = `${day}/${month}/${year}`;