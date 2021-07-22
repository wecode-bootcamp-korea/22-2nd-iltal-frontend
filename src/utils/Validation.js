export const validationName = name => name.length > 0;

export function validationEmail(email) {
  // @포함
  const EMAIL_REGES = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  return EMAIL_REGES.test(email);
}

export function validationPassword(password) {
  //비밀번호는 8글자 이상, 소문자나 대문자 입력하고 특수문자는 필수로 1글자
  const PASSWORD_REGES =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  return PASSWORD_REGES.test(password);
}

export const validationFunction = {
  name: validationName,
  email: validationEmail,
  password: validationPassword,
};
