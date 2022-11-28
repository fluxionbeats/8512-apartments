import { ImageType, Size, StoryType } from '../../types/types';
import { Button } from '../Button/Button';
import styles from './styles.module.css';
import classnames from 'classnames';

type StoryProps = {
  story: StoryType;
  image: ImageType;
  size: Size;
};

export const Story = ({ story, image, size }: StoryProps): JSX.Element => {
  const totalCount = 2;
  const storyClass = classnames(
    styles.story,
    {
      [styles['story--sm']]: size === Size.sm,
      [styles['story--lg']]: size === Size.lg,
    },
  );
  return (
    <div className={storyClass}>
      <img className={styles['story__img']} src={image.src} alt={image.alt} />
      <div className={styles['story__navigation']}>
        <span className={styles.this}>01</span>
        <span className="visually-hidden">из</span>
        <span className={styles.total}>
          {totalCount < 10 && '0'}{totalCount}
        </span>
      </div>
      <p className={styles.content}>{story.text}</p>
      <Button parentClass={styles.button}>
        Смотреть
      </Button>
    </div>
  );
};
