
interface MealCardProps {
  image: string;
  title: string;
  description: string;
}

const MealCard: React.FC<MealCardProps> = ({ image, title, description }) => (
  <div className="border border-gray-200 rounded-lg w-72 shadow-md overflow-hidden mx-auto my-4 bg-white">
    <img src={image} alt={title} className="w-full h-44 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default MealCard;
