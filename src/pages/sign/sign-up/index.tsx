import { useState } from 'react';
import { InputForm } from '../../../common/input/input-form';
import { postSignIn } from '../../../libs/axios/AxiosUser';
import { user } from '../../../types/api/apiUser';

const SignUp = () => {
  const [userData, setUserData] = useState<user>({ email: '', pw: '' });
  const onSignIn: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const $email = form.elements.namedItem('email') as HTMLFormElement | null;
    const $pw = form.elements.namedItem('pw') as HTMLFormElement | null;
    if (!$email || !$pw) return;
    console.log($pw.value);
    const newData = {
      email: $email.value,
      pw: $pw.value,
    };
    setUserData(newData);

    await postSignIn(userData);
  };
  return (
    <div>
      <form onSubmit={onSignIn}>
        <InputForm text="email" type="text" id="email" name="email" />
        <InputForm text="P.W" type="text" id="pw" name="pw" />
        <button type="submit">가입</button>
      </form>
    </div>
  );
};
export default SignUp;
