import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { NoDataFoundComponent } from '../no-data-found/no-data-found.component';
import IProduct from '../../core/interfaces/IProduct';

@Component({
  selector: 'app-wood',
  standalone: true,
  imports: [ProductComponent,NoDataFoundComponent],
  templateUrl: './wood.component.html',
  styleUrl: './wood.component.css'
})
export class WoodComponent {
//Products: Product[] = [];
Products: IProduct[] = [
  {
      id: 11,
      title: "Annibale Colombo Bed",
      description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      category: "furniture",
      price: 1899.99,
      discountPercentage: 0.29,
      rating: 4.14,
      stock: 47,
      tags: [
          "furniture",
          "beds"
      ],
      brand: "Annibale Colombo",
      sku: "4KMDTZWF",
      weight: 3,
      dimensions: {
          width: 28.75,
          height: 26.88,
          depth: 24.47
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
          {
              rating: 4,
              comment: "Great value for money!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Julian Newton",
              reviewerEmail: "julian.newton@x.dummyjson.com"
          },
          {
              rating: 5,
              comment: "Would buy again!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Madison Collins",
              reviewerEmail: "madison.collins@x.dummyjson.com"
          },
          {
              rating: 4,
              comment: "Would buy again!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Clara Berry",
              reviewerEmail: "clara.berry@x.dummyjson.com"
          }
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
          createdAt: "2024-05-23T08:56:21.620Z",
          updatedAt: "2024-05-23T08:56:21.620Z",
          barcode: "7113807059215",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
      },
      images: [
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
      ],
      thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
  },
  {
      id: 12,
      title: "Annibale Colombo Sofa",
      description: "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      category: "furniture",
      price: 2499.99,
      discountPercentage: 18.54,
      rating: 3.08,
      stock: 16,
      tags: [
          "furniture",
          "sofas"
      ],
      brand: "Annibale Colombo",
      sku: "LUU95CQP",
      weight: 3,
      dimensions: {
          width: 20.97,
          height: 19.11,
          depth: 25.81
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
          {
              rating: 5,
              comment: "Very satisfied!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Tyler Davis",
              reviewerEmail: "tyler.davis@x.dummyjson.com"
          },
          {
              rating: 5,
              comment: "Excellent quality!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Hannah Robinson",
              reviewerEmail: "hannah.robinson@x.dummyjson.com"
          },
          {
              rating: 3,
              comment: "Waste of money!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Madison Collins",
              reviewerEmail: "madison.collins@x.dummyjson.com"
          }
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
          createdAt: "2024-05-23T08:56:21.620Z",
          updatedAt: "2024-05-23T08:56:21.620Z",
          barcode: "0426785817074",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
      },
      images: [
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
      ],
      thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png"
  },
  {
      id: 13,
      title: "Bedside Table African Cherry",
      description: "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      category: "furniture",
      price: 299.99,
      discountPercentage: 9.58,
      rating: 4.48,
      stock: 16,
      tags: [
          "furniture",
          "bedside tables"
      ],
      brand: "Furniture Co.",
      sku: "OWPLTZYX",
      weight: 10,
      dimensions: {
          width: 25.43,
          height: 20.2,
          depth: 24.95
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
          {
              rating: 5,
              comment: "Very happy with my purchase!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "John Doe",
              reviewerEmail: "john.doe@x.dummyjson.com"
          },
          {
              rating: 4,
              comment: "Highly recommended!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Avery Carter",
              reviewerEmail: "avery.carter@x.dummyjson.com"
          },
          {
              rating: 4,
              comment: "Very pleased!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Evelyn Sanchez",
              reviewerEmail: "evelyn.sanchez@x.dummyjson.com"
          }
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 5,
      meta: {
          createdAt: "2024-05-23T08:56:21.620Z",
          updatedAt: "2024-05-23T08:56:21.620Z",
          barcode: "2913244159666",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
      },
      images: [
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
      ],
      thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png"
  },
  {
      id: 14,
      title: "Knoll Saarinen Executive Conference Chair",
      description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      category: "furniture",
      price: 499.99,
      discountPercentage: 15.23,
      rating: 4.11,
      stock: 47,
      tags: [
          "furniture",
          "office chairs"
      ],
      brand: "Knoll",
      sku: "RKHVJ4FE",
      weight: 3,
      dimensions: {
          width: 16.59,
          height: 21.46,
          depth: 29.07
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
          {
              rating: 4,
              comment: "Very happy with my purchase!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Leah Gutierrez",
              reviewerEmail: "leah.gutierrez@x.dummyjson.com"
          },
          {
              rating: 4,
              comment: "Would buy again!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Nolan Gonzalez",
              reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
          },
          {
              rating: 2,
              comment: "Waste of money!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Stella Morris",
              reviewerEmail: "stella.morris@x.dummyjson.com"
          }
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 5,
      meta: {
          createdAt: "2024-05-23T08:56:21.620Z",
          updatedAt: "2024-05-23T08:56:21.620Z",
          barcode: "0726316339746",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
      },
      images: [
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
      ],
      thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
  },
  {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      description: "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      category: "furniture",
      price: 799.99,
      discountPercentage: 11.22,
      rating: 3.26,
      stock: 95,
      tags: [
          "furniture",
          "bathroom"
      ],
      brand: "Bath Trends",
      sku: "7OLTIEVO",
      weight: 6,
      dimensions: {
          width: 7.32,
          height: 22.64,
          depth: 12.37
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
          {
              rating: 5,
              comment: "Highly recommended!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Charlotte Lopez",
              reviewerEmail: "charlotte.lopez@x.dummyjson.com"
          },
          {
              rating: 1,
              comment: "Would not recommend!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "William Gonzalez",
              reviewerEmail: "william.gonzalez@x.dummyjson.com"
          },
          {
              rating: 2,
              comment: "Not worth the price!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Ava Harrison",
              reviewerEmail: "ava.harrison@x.dummyjson.com"
          }
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
          createdAt: "2024-05-23T08:56:21.620Z",
          updatedAt: "2024-05-23T08:56:21.620Z",
          barcode: "7839797529453",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
      },
      images: [
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
      ],
      thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png"
  }];

}