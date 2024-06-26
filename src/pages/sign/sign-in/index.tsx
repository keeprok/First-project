import { InputForm } from '../../../common/input/input-form';
import { postSignIn } from '../../../libs/axios/AxiosUser';

const SignIn = () => {
  const onSignUp: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const $email = form.elements.namedItem('email') as HTMLFormElement | null;
    const $pw = form.elements.namedItem('pw') as HTMLFormElement | null;
    if (!$email || !$pw) return;
    const newData = {
      email: $email.value,
      pw: $pw.value,
    };

    await postSignIn(newData);
  };

  return (
    <div>
      <form onSubmit={onSignUp}>
        <InputForm text="email" type="text" id="email" name="email" />
        <InputForm text="P.W" type="text" id="pw" name="pw" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
export default SignIn; //오류 해결와서 할것
