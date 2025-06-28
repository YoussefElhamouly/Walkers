import mongoose from "mongoose";
import Products from "./models/productsSchema.js";
import Reviews from "./models/reviewsSchema.js";
import User from "./models/usersSchema.js";

const MONGO_URI = "mongodb://localhost:27017/store";

// Fake data generators
const fakeNames = [
  "John Smith",
  "Emma Johnson",
  "Michael Brown",
  "Sarah Davis",
  "David Wilson",
  "Lisa Anderson",
  "James Taylor",
  "Jennifer Martinez",
  "Robert Garcia",
  "Amanda Rodriguez",
  "Christopher Lee",
  "Michelle White",
  "Daniel Thompson",
  "Jessica Clark",
  "Matthew Lewis",
  "Ashley Hall",
  "Joshua Allen",
  "Nicole Young",
  "Andrew King",
  "Stephanie Wright",
  "Kevin Scott",
  "Rachel Green",
  "Brian Baker",
  "Lauren Adams",
  "Steven Nelson",
  "Megan Carter",
  "Timothy Mitchell",
  "Heather Perez",
  "Jeffrey Roberts",
  "Amber Turner",
  "Ryan Phillips",
  "Danielle Campbell",
  "Jacob Parker",
  "Brittany Evans",
  "Gary Edwards",
  "Melissa Collins",
  "Eric Stewart",
  "Tiffany Sanchez",
  "Stephen Morris",
  "Natalie Rogers",
  "Larry Reed",
  "Christina Cook",
  "Scott Morgan",
  "Victoria Bell",
  "Brandon Murphy",
  "Rebecca Bailey",
  "Benjamin Rivera",
  "Laura Cooper",
  "Samuel Richardson",
  "Crystal Cox",
];

const fakeUsernames = [
  "johnsmith",
  "emma_j",
  "mikebrown",
  "sarahd",
  "davidw",
  "lisa_a",
  "james_t",
  "jen_martinez",
  "rob_garcia",
  "amanda_r",
  "chris_lee",
  "michelle_w",
  "dan_thompson",
  "jess_clark",
  "matt_lewis",
  "ash_hall",
  "josh_allen",
  "nicole_y",
  "andy_king",
  "steph_w",
  "kevin_scott",
  "rachel_green",
  "brian_baker",
  "lauren_adams",
  "steve_nelson",
  "megan_c",
  "tim_mitchell",
  "heather_p",
  "jeff_r",
  "amber_t",
  "ryan_phillips",
  "danielle_c",
  "jake_parker",
  "britt_evans",
  "gary_e",
  "melissa_c",
  "eric_stewart",
  "tiff_sanchez",
  "stephen_m",
  "natalie_r",
  "larry_reed",
  "christina_cook",
  "scott_morgan",
  "victoria_bell",
  "brandon_m",
  "rebecca_b",
  "ben_rivera",
  "laura_cooper",
  "sam_richardson",
  "crystal_cox",
];

const fakeEmails = [
  "john.smith@email.com",
  "emma.j@email.com",
  "mike.brown@email.com",
  "sarah.d@email.com",
  "david.w@email.com",
  "lisa.a@email.com",
  "james.t@email.com",
  "jen.martinez@email.com",
  "rob.garcia@email.com",
  "amanda.r@email.com",
  "chris.lee@email.com",
  "michelle.w@email.com",
  "dan.thompson@email.com",
  "jess.clark@email.com",
  "matt.lewis@email.com",
  "ash.hall@email.com",
  "josh.allen@email.com",
  "nicole.y@email.com",
  "andy.king@email.com",
  "steph.w@email.com",
  "kevin.scott@email.com",
  "rachel.green@email.com",
  "brian.baker@email.com",
  "lauren.adams@email.com",
  "steve.nelson@email.com",
  "megan.c@email.com",
  "tim.mitchell@email.com",
  "heather.p@email.com",
  "jeff.r@email.com",
  "amber.t@email.com",
  "ryan.phillips@email.com",
  "danielle.c@email.com",
  "jake.parker@email.com",
  "britt.evans@email.com",
  "gary.e@email.com",
  "melissa.c@email.com",
  "eric.stewart@email.com",
  "tiff.sanchez@email.com",
  "stephen.m@email.com",
  "natalie.r@email.com",
  "larry.reed@email.com",
  "christina.cook@email.com",
  "scott.morgan@email.com",
  "victoria.bell@email.com",
  "brandon.m@email.com",
  "rebecca.b@email.com",
  "ben.rivera@email.com",
  "laura.cooper@email.com",
  "sam.richardson@email.com",
  "crystal.cox@email.com",
];

const reviewComments = [
  "Great quality product! Highly recommend.",
  "Exactly what I was looking for. Perfect fit.",
  "Fast delivery and excellent packaging.",
  "The material feels premium and durable.",
  "Love the design and colors available.",
  "Good value for money. Will buy again.",
  "Comfortable and stylish. Great purchase!",
  "The sizing is accurate and fits perfectly.",
  "Beautiful product, exceeded my expectations.",
  "Excellent customer service and product quality.",
  "Very satisfied with this purchase.",
  "The quality is outstanding for the price.",
  "Perfect for everyday use. Highly recommend!",
  "Great addition to my collection.",
  "The craftsmanship is impressive.",
  "Comfortable and well-made product.",
  "Fast shipping and great product quality.",
  "Love the attention to detail in design.",
  "Excellent fit and very comfortable.",
  "Great product, worth every penny!",
  "The material is soft and durable.",
  "Perfect gift for friends and family.",
  "High-quality construction and materials.",
  "Very happy with this purchase decision.",
  "The design is modern and trendy.",
  "Great customer experience overall.",
  "The product exceeded my expectations.",
  "Comfortable and stylish design.",
  "Excellent quality and fast delivery.",
  "Love the variety of options available.",
  "Great value and excellent quality.",
  "Perfect fit and comfortable to wear.",
  "The attention to detail is impressive.",
  "Highly recommend this product!",
  "Great for both casual and formal occasions.",
  "The material feels luxurious and soft.",
  "Excellent craftsmanship and design.",
  "Very satisfied with the purchase.",
  "The product is well-made and durable.",
  "Great addition to my wardrobe.",
  "Love the modern and trendy design.",
  "Perfect for my needs and expectations.",
  "The quality is exceptional for the price.",
  "Comfortable and stylish product.",
  "Great customer service experience.",
  "The product meets all my expectations.",
  "Excellent fit and great quality.",
  "Love the design and functionality.",
  "Great value for money spent.",
  "The material is high-quality and durable.",
  "Perfect for everyday use and comfort.",
  "Highly recommend this excellent product!",
];

function generateRandomRating() {
  // Generate ratings with a realistic distribution (more 4-5 stars, fewer 1-2 stars)
  const rand = Math.random();
  if (rand < 0.6) return Math.floor(Math.random() * 2) + 4; // 60% chance of 4-5 stars
  if (rand < 0.85) return 3; // 25% chance of 3 stars
  return Math.floor(Math.random() * 2) + 1; // 15% chance of 1-2 stars
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function createFakeUsers() {
  console.log("Creating fake users...");

  const users = [];
  for (let i = 0; i < fakeNames.length; i++) {
    const [firstName, lastName] = fakeNames[i].split(" ");

    const user = new User({
      username: fakeUsernames[i],
      email: fakeEmails[i],
      password: "password123", // Will be hashed by the pre-save hook
      firstName,
      lastName,
      role: Math.random() < 0.1 ? "admin" : "user", // 10% chance of being admin
      isActive: Math.random() < 0.95, // 95% chance of being active
      lastLogin: new Date(
        Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
      ), // Random date within last 30 days
    });

    users.push(user);
  }

  try {
    await User.insertMany(users);
    console.log(`Created ${users.length} fake users successfully.`);
    return users;
  } catch (error) {
    if (error.code === 11000) {
      console.log("Some users already exist, skipping user creation.");
      return await User.find({});
    }
    throw error;
  }
}

async function createFakeReviews(products, users) {
  console.log("Creating fake reviews...");

  const reviews = [];
  const reviewsPerProduct = 20;

  for (const product of products) {
    // Get random users for this product (avoid duplicates)
    const selectedUsers = getRandomElements(users, reviewsPerProduct);

    for (const user of selectedUsers) {
      const review = new Reviews({
        user_id: user._id,
        product_id: product._id,
        rating: generateRandomRating(),
        comment: getRandomElement(reviewComments),
        createdAt: new Date(
          Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
        ), // Random date within last year
      });

      reviews.push(review);
    }
  }

  try {
    await Reviews.insertMany(reviews);
    console.log(`Created ${reviews.length} fake reviews successfully.`);
  } catch (error) {
    console.error("Error creating reviews:", error);
    throw error;
  }
}

async function migrateData() {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("Connected to MongoDB");

    // Get existing products
    const products = await Products.find({});
    console.log(`Found ${products.length} existing products`);

    if (products.length === 0) {
      console.log("No products found. Please create products first.");
      return;
    }

    // Create fake users
    const users = await createFakeUsers();

    // Create fake reviews for each product
    await createFakeReviews(products, users);

    console.log("Migration completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

migrateData().catch((err) => {
  console.error(err);
  process.exit(1);
});
