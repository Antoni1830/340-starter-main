res.render('index');

res.render('index', { image: 'public/images/vehicles/.delorean.jpg' });
const images = [
    'public/images/vehicles/.delorean.jpg',
    
    
];
app.get('/', (req, res) => {
    const imageUrl = 'path/to/your/image.jpg'; // Define your image URL here
    res.render('index', { image: imageUrl });
});