import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://simonad70:6065@cluster0.e5b4biu.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;