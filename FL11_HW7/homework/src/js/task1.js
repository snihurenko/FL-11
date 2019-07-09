let email = prompt('Please enter your email address');
let password = '';
let changePass = '';
let oldPass = password;
let newPass = '';
let newPass2 = '';
const minEmaillength = 6;
const minPasslength = 5;

if (email === null || email === '') {
	alert('Canceled!');
} else if (email.length < minEmaillength) {
	alert('I don`t know any emails having name length less than' + minEmaillength + 'symbols');
} else {
		if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
			password = prompt('Please enter your password');

			if (password === null || password === ''){
				alert('Canceled!');
			} else if ( email === 'user@gmail.com' && password === 'UserPass' 
					|| email === 'admin@gmail.com' && password === 'AdminPass'){
				changePass = confirm('Do you want to change your password?');
					if (changePass === false ){
						alert('You have failed the change');
					} else {
						oldPass = prompt('Please enter old password')
						if ( email === 'user@gmail.com' && oldPass === 'UserPass' 
							|| email === 'admin@gmail.com' && oldPass === 'AdminPass'){
							newPass = prompt('Please enter new password');
								if (newPass.length < minPasslength) {
									alert('It’s too short password. Sorry');
								} else {
									newPass2 = prompt('Please confirm your new password');
									if (newPass === newPass2) {
										alert('You have successfully changed your password');
									} else {
										alert('You wrote the wrong password');
									}
								}
						} else if (oldPass === null || oldPass === '') {
							alert('Canceled!');
						} else {
							alert('Wrong password!');
						}	
					}
			} else {
				alert('Wrong password!');
			}
		} else {
	alert('I don’t know you');
  }
}
