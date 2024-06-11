import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, SimpleGrid } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} mb={8}>
        <Text fontSize="4xl" fontWeight="bold">Remote Tech Jobs</Text>
        <Text fontSize="lg">Find your next remote job in tech. Filter by category to narrow down your search.</Text>
      </VStack>
      <HStack spacing={4} mb={8}>
        <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "blue" : "gray"}>All</Button>
        <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
        <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
        <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {filteredJobs.map(job => (
          <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold">{job.title}</Text>
            <Text>{job.category}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;