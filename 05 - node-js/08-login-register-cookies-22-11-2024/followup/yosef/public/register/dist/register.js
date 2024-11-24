var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Model
var User = /** @class */ (function () {
    function User(name, phone, email, password) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
    return User;
}());
// let new_user = 0;
var counterUser = Number(localStorage.getItem('counterUser'));
var new_user = Number(localStorage.getItem('new_user')) || 0;
var userlocalStorage = localStorage.getItem("users");
var users = userlocalStorage ? JSON.parse(userlocalStorage) : [];
var countineBtn = document.getElementById('countinueBtn');
if (!countineBtn)
    throw new Error;
countineBtn.style.display = "none";
//Controller
function checkData(event) {
    try {
        var countineBtn_1 = document.getElementById('countinueBtn'); // countine buuton Checks if the button exists
        if (!countineBtn_1)
            throw new Error;
        var registerBtn = document.getElementById('registerBtn');
        if (!registerBtn)
            throw new Error;
        event.preventDefault();
        var goodData = true; // על ההתחלה אני מניח שכל הנתונים שהכנסו תקינים
        var name = document.getElementById("name");
        if (!name)
            return "error";
        var check_name = document.getElementById("check_name");
        if (!check_name)
            return "error";
        if (!/^[a-zA-Z\s]+$/.test(name.value)) {
            check_name.innerHTML = "";
            check_name.innerHTML = "Invalid name. Only letters and spaces are allowed.";
            goodData = false;
        }
        // check phone number
        var phone = document.getElementById("phone");
        if (!phone)
            return "error";
        var check_phone = document.getElementById("check_phone");
        if (!check_phone)
            return "error";
        if (!/^\d{10}$/.test(phone.value)) {
            check_phone.innerHTML = "Invalid phone number. It should be 10 digits long.";
            goodData = false;
        }
        // check email address
        var email = document.getElementById("email");
        if (!email)
            return "error";
        var check_email = document.getElementById("check_email");
        if (!check_email)
            return "error";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            check_email.innerHTML = "Invalid email address.";
            goodData = false;
        }
        // check password
        var password = document.getElementById("password");
        if (!password)
            return "error";
        var confirmPassword = document.getElementById("confirm-password");
        if (!confirmPassword)
            return "error";
        var send_text = document.getElementById("check_confirm_password");
        if (!send_text)
            return "error";
        if (password.value == "" || confirmPassword.value == "") {
            goodData = false;
            send_text.innerHTML = "Password fields cannot be empty";
        }
        if (password.value.length < 8) /* check if password is at least 8 characters long */ {
            goodData = false;
            send_text.innerHTML = "Password should be at least 8 characters long";
        }
        if (password.value !== confirmPassword.value) /* check if password is correct */ {
            goodData = false;
            send_text.innerHTML = "Passwords do not match";
        }
        if (goodData) {
            send_text.style.fontSize = "30px";
            send_text.style.color = "green";
            send_text.innerHTML = "The registration was successful";
            check_name.innerHTML = "success";
            check_phone.innerHTML = "success";
            check_email.innerHTML = "success";
            check_name.style.color = "green";
            check_phone.style.color = "green";
            check_email.style.color = "green";
            send_text.style.color = "green";
            countineBtn_1.style.display = "flex";
            registerBtn.style.display = "none";
            registerUser(name.value, phone.value, email.value, password.value);
            alert("You have successfully registered");
            continueBtn();
        }
    }
    catch (error) {
        console.error(error);
    }
}
//Controller
function registerUser(name, phone, email, password) {
    try {
        var user = new User(name, phone, email, password);
        users.push(user); /* פה זה מערך בתוך הקובץ ולא המערך של השרת */
        counterUser++; /* זה שומר באחסון המקומי כמה אנשים נרשמו */
        console.log("now user number : " + new_user);
        new_user++;
        localStorage.setItem('new_user', String(new_user));
        localStorage.setItem("users", JSON.stringify(users));
        /* send to the server */
        var response = fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, password: password, email: email, phone: phone })
        });
    }
    catch (error) {
        console.error(error);
    }
}
// controller
function continueBtn() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                window.location.href = "http://localhost:3000";
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
