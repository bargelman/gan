import _ from 'lodash';
import './Avatar.css';

const Avatar = ({firstName, lastName, size = 'lg', theme = 'light'}) => {

  const initials = `${_.head(firstName)}${_.head(lastName)}`;

  if (!firstName || !lastName) {
    return null;
  }

  return (
    <div className={`avatar ${size} ${theme}`}>
      {initials}
    </div>
  );

};

export default Avatar;