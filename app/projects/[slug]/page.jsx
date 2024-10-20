import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const product = products.find((product) => product.slug === slug);

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Rabah Sebti",
      description: "Rabah Sebti is a full stack developer.",
    };
  }
}

export default function SingleProjectPage({ params }) {
  const slug = params.slug;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
