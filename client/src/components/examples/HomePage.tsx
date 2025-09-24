import HomePage from '../HomePage';

export default function HomePageExample() {
  return (
    <HomePage
      onCheckCompatibility={(myZodiac, partnerZodiac) => 
        console.log('Checking compatibility between', myZodiac.name, 'and', partnerZodiac.name)
      }
    />
  );
}