import {
  Tr,
  ThColor,
  ThName,
  ThType,
  ThDelete,
  BtnDelete,
  DeleteIcon,
} from './CategoryItem.syled';

const language = localStorage.getItem('i18nextLng');
let lang = 'en';
if (language === 'uk' || language.includes('uk')) {
  lang = 'uk';
}

export const CategoryItem = ({
  _id,
  type,
  nameEn,
  nameUk,
  color,
  onDelete,
}) => {
  const handleClick = () => {
    onDelete(_id);
  };

  return (
    <tbody>
      <Tr>
        <ThColor style={{ backgroundColor: color }}></ThColor>
        <ThName> {lang === 'uk' ? nameUk : nameEn}</ThName>
        <ThType type={type}>{type}</ThType>
        <ThDelete>
          <BtnDelete type="button" onClick={handleClick}>
            <DeleteIcon width={20} height={20} />
          </BtnDelete>
        </ThDelete>
      </Tr>
    </tbody>
  );
};
