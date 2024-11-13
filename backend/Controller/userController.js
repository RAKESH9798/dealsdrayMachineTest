import User from '../Model/userModel.js';

const validateUserData = (user) => {
    if (!user.username || typeof user.username !== 'string') {
        return { valid: false, message: 'Username is required and should be a string.' };
    }
    if (!user.email || typeof user.email !== 'string') {
        return { valid: false, message: 'Email is required and should be a string.' };
    }
    if (!user.password || typeof user.password !== 'string' || user.password.length < 6) {
        return { valid: false, message: 'Password is required and should be at least 6 characters long.' };
    }
    return { valid: true };
};

const signUp = async (req, res) => {
    const user = req.body;

    // Validate user data
    const validationResult = validateUserData(user);
    if (!validationResult.valid) {
        return res.status(400).json({ message: validationResult.message });
    }

    try {
        // Check if the user is already registered
        const isUserExist = await User.findOne({ email: user.email });
        if (isUserExist) {
            return res.status(409).json({ message: "User is already registered." });
        }

        // Create a new user
        const newUser = await User.create(user);
        if (newUser) {
            console.log(newUser);
            return res.status(201).json({ message: "User is registered successfully." });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "An error occurred during registration.", error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    // Basic validation for login credentials
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const getUser = await User.findOne({ email });

        if (!getUser) {
            return res.status(400).json({ message: "User is not registered." });
        }

        if (getUser.password === password) {
            return res.status(200).json({ message: "User login successful." });
        } else {
            return res.status(401).json({ message: "Invalid password." });
        }
    } catch (error) {
        console.error("Error occurred while logging in:", error);
        return res.status(500).json({ message: "Error occurred while logging in.", error: error.message });
    }
};

export { signUp, login };
