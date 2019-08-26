// localStorage

$(document).ready(function () {

	let mails = ["tanja-al...@mail.ru",
    "olga72...@yandex.ru",
    "alen..@ya.ru",
    "panterka...@yandex.ru",
    "yuliya44...@yandex.ru",
    "rasina-ol...@gmail.com",
    "borovkovael...@mail.ru",
    "kochet...@email.ru",
    "svetla...@gmail.com",
    "kisa008...@gmail.com",
    "lady...@yandex.ru",
    "tanechka39...@mail.ru",
    "verochka-msk...@mail.ru",
    "t.abram...@mail.ru",
    "verka7...@mail.ru",
    "knopochka...@mail.ru",
    "koten...@ya.ru",
    "solnech...@mail.ru",
    "marin...@mail.ru", 
    "nata1969...@gmail.com", 
    "veronikab...@mail.ru"];
		rand = Math.floor(Math.random() * mails.length);

	setTimeout(function() {
		if(localStorage.getItem('checked') != 'yes') {
			$('.message__par_val_rand').text(mails[rand]);
			$('.message').addClass("message_status_open");
			localStorage.setItem('checked', 'yes');
		}
		else if (localStorage.getItem('checked') === 'yes') {
			return;
		}
	}, 45000)

	setTimeout(function() {
		$('.message').removeClass("message_status_open");
	}, 53000);
});