import { useState } from "react";
import { Container, VStack, Text, Select, Box, Heading, SimpleGrid, Card, CardBody } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product", description: "Manage product lifecycle and roadmap." },
  { id: 2, title: "UI/UX Designer", category: "Design", description: "Design user interfaces and experiences." },
  { id: 3, title: "Software Engineer", category: "Engineering", description: "Develop and maintain software applications." },
  { id: 4, title: "DevOps Engineer", category: "Engineering", description: "Manage infrastructure and CI/CD pipelines." },
  { id: 5, title: "Product Designer", category: "Design", description: "Create product designs and prototypes." },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Remote Tech Jobs
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Find your next remote job in tech. Filter by category to narrow down your search.
        </Text>
        <Select
          placeholder="Filter by category"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Product">Product</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </Select>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredJobs.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg">
              <CardBody>
                <Heading as="h3" size="md" mb={2}>
                  {job.title}
                </Heading>
                <Text>{job.description}</Text>
                <Box mt={2} fontWeight="bold">
                  Category: {job.category}
                </Box>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;