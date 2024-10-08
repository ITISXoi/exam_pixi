export const REGEX_PASSWORD =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export const REGEX_NUMBER = /[0-9]/;

export const REGEX_UPPERCASE = /[A-Z]/;

export const REGEX_NO_SPECIAL_CHARACTERS =
  /^[^~`!@$#%^&*()+=<>?/;:.'"[\]{}|\\]+$/i;

export const REGEX_UNSIGNED_LETTERS =
  /^[^áàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵđÁÀẢÃẠẮẰẲẴẶẤẦẨẪẬÉÈẺẼẸẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤỨỪỬỮỰÝỲỶỸỴĐ]+$/;

export const REGEX_EMOJI =
  /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}\u{1F004}]/u;

export const REGEX_PHONE_NUMBER = /^(?:[0-9] ?){6,14}[0-9]$/;

export const REGEX_ALPHANUMERIC =
  /^([a-zA-Z0-9^áàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵđÁÀẢÃẠẮẰẲẴẶẤẦẨẪẬÉÈẺẼẸẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤỨỪỬỮỰÝỲỶỸỴĐ,.?! /])*$/u;

export const REGEX_PHONE_NUMBER_CREATE_ACADEMY = /^(?:\+?[0-9] ?){6,}[0-9]$/;
export const CARD_NUMBER = /^(?:\+?[0-9] ?){15,15}[0-9]$/;
export const SECURE_CODE = /^(?:\+?[0-9] ?){2,3}[0-9]$/;
export const REGEX_PHONE_NUMBER_NO_REQUIRED = /^(?:\+?[0-9] ?){0,}[0-9]*$/;
