
const Review = () => {
    const reviews = [
      {
        parentName: 'John Doe',
        parentImage: 'https://i.ibb.co/GPhbKfN/arda-turkmen-kimdir-ve-kac-yasindadir-arda-turkmenin-esi-1658128346-1153.webp',
        message: 'We absolutely love BrainBox Toys! The collection is fantastic, and our kids have so much fun playing with the toys. Thank you for creating such an amazing website!',
      },
      {
        parentName: 'Jane Smith',
        parentImage: 'https://i.ibb.co/dLGrmyf/400-maksut-min.jpg',
        message: 'As a parent, I highly recommend BrainBox Toys. The toys are of great quality, and the variety is impressive. Its a one-stop-shop for all our toy needs. Keep up the excellent work!',
      },
      {
        parentName: 'Mike Johnson',
        parentImage: 'https://i.ibb.co/mhjtqCd/P3-OLGJ1-copy-1.png',
        message: 'I cant say enough good things about BrainBox Toys! The website is user-friendly, and the toy collection is top-notch. My kids are always excited to receive new toys from this site. Highly recommended!',
      },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Parent Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img
                src={review.parentImage}
                alt={`Parent ${index + 1}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{review.parentName}</h3>
              <p>{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Review;
  