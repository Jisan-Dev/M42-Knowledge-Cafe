import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <header className="font-exo container mx-auto p-4 border-b-2 flex justify-between items-center">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="profile image" />
    </header>
  );
};

export default Header;
