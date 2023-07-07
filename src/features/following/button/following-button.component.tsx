import { FC } from 'react';

type FollowingButtonProps = {
  isFav: boolean;
  onToggleFavorite: (setFav: boolean) => void;
};

const FollowingButtonComponent: FC<FollowingButtonProps> = ({
  isFav,
  onToggleFavorite
}: FollowingButtonProps) => {
  const src = isFav ? '/images/star-filled.png' : '/images/star.png';

  return (
    <div className={'following-button'} onClick={() => onToggleFavorite(!isFav)}>
      <img src={src} />
    </div>
  );
};

export default FollowingButtonComponent;
