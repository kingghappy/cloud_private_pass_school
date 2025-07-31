const handleRequest = async (res, serviceCall) => {
  try {
    const { data } = await serviceCall();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

export default handleRequest;
