import './App.css'
import { AlchemistHeader } from './components/AlchemistHeader/AlchemistHeader'
import { CharacterRatingTable } from './components/CharacterRatingTable/CharacterRatingTable'
import { CharacterCards } from './components/CharacterCards/CharacterCards'

const characters = [
    {id: 0, name: "Alex Louis Armstrong", nickname: "Major Armstrong", class: "light", skills: ["Alchemy", "Muscles"], votes: 94, image: "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg", description: "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show"},
    {id: 1, name: "Alphonse Elrich", nickname: "", class: "dark", skills: ["Being Loveable", "Alchemy"], votes: 110, image: "https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg", description: "Alphonse is a walking suit of armor on a quest to find his real body"},
    {id: 2, name: "Edward Elrich", nickname: "The Fullmetal Alchemist", class: "light", skills: ["Alchemy", "Human Transmutation"], votes: 100, image: "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png", description: "Edward is a master alchemist and our main character... just don't call him short"},
    {id: 3, name: "Greed", nickname: "", class: "", skills: [], votes: 0, image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg", description: "Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them."},
    {id: 4, name: "Nina Tucker", nickname: "", class: "dark", skills: ["Loving Dogs", "Being Adorable"], votes: 93, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dK-tXCnVxbSeSJuCKmiX0zUbnCEV1ss54DeOYgXUHSE0WB23TAUD4a3itwFbzJ9fkg&usqp=CAU", description: "Nina is an adorable little girl! If you've watched FMA you know..."},
    {id: 5, name: "Riza Hawkeye", nickname: "Hawkeye", class: "dark", skills: ["Sniper", "Loyal AF"], votes: 95, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8171ae7d-9e3c-4aeb-b277-2a8308b0262a/d87573o-e22eb88b-1c20-449c-9093-1e4fba7856f3.png/v1/fill/w_622,h_350,strp/riza_hawkeye___minimalist_vector_wallpaper_by_rebeccaangoo_d87573o-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODE3MWFlN2QtOWUzYy00YWViLWIyNzctMmE4MzA4YjAyNjJhXC9kODc1NzNvLWUyMmViODhiLTFjMjAtNDQ5Yy05MDkzLTFlNGZiYTc4NTZmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.InNg0JonI4tCcxkN-u8E2z7Z4aqvLLxClcDwujxbTJs", description: "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show"},
    {id: 6, name: "Solf J. Kimblee", nickname: "The Crimson Alchemist", class: "", skills: [], votes: 0, image: "https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/03/full-metal-alchemist-mobile-char-2.jpg?resize=640%2C457&ssl=1", description: "Kimblee suckkkkkssss, seriously he's not very nice"},
    {id: 7, name: "Tim Marcoh", nickname: "Dr. Marcoh", class: "", skills: [], votes: 0, image: "https://m.media-amazon.com/images/M/MV5BYjljMjEzZmUtMjE2My00NWY1LTljMzAtYWNjOTI5Yzk5NmZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_FMjpg_UX1000_.jpg", description: "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong"},
    {id: 8, name: "Winrey Rockbell", nickname: "", class: "", skills: [], votes: 0, image: "https://s3.amazonaws.com/comicgeeks/characters/avatars/36066.jpg?t=1668454278", description: "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there"},
];

function App() {
  return (
    <>
      <div>
        <AlchemistHeader/>
        <CharacterRatingTable characters={characters}/>
        <CharacterCards characters={characters}/>
      </div>
    </>
  )
}

export default App