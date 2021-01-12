import imageUrl from '../../assets/images/404.jpg';
import NavBar from '../../components/NavBar';

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={imageUrl} alt="Page Not Found" style={{ width: '50%' }} />
      </div>
    </>
  );
};

export { NotFound };
