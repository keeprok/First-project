import { InputForm } from '../../../common/input/input-form';
import { postSignUp } from '../../../libs/axios/AxiosUser';

const SignUp = () => {
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

    await postSignUp(newData);
  };
  return (
    <div>
      <form onSubmit={onSignUp}>
        <InputForm text="email" type="text" id="email" name="email" />
        <InputForm text="P.W" type="text" id="pw" name="pw" />
        <button type="submit">가입</button>
      </form>
    </div>
  );
};
export default SignUp;
