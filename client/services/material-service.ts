import type { MaterialType } from "@/types/material";

// API URL
const API_URL =
  "https://recycling-marketplace-backend.onrender.com/api/materials";

// Функция для преобразования данных API в формат нашего приложения
const mapApiMaterialToAppMaterial = (apiMaterial: any): MaterialType => {
  console.log("Mapping API material:", apiMaterial);
  return {
    id: apiMaterial.id?.toString() || "unknown_id",
    name: apiMaterial.name || "Без названия",
    type: apiMaterial.category_id
      ? mapCategoryIdToType(apiMaterial.category_id)
      : "other",
    description: apiMaterial.description || "",
    price: Number.parseFloat(apiMaterial.price) || 0,
    quantity: apiMaterial.quantity || 100, // Устанавливаем значение по умолчанию
    image: apiMaterial.image_url || null,
    userId: apiMaterial.user_id || "admin",
    userName: apiMaterial.user_name || "Администратор",
    status: mapApiStatusToAppStatus(apiMaterial.status),
    createdAt: apiMaterial.created_at || new Date().toISOString(),
    dealType: apiMaterial.deal_type || "sell", // Устанавливаем значение по умолчанию
  };
};

// Функция для преобразования category_id в тип материала
const mapCategoryIdToType = (categoryId: number): string => {
  const categoryMap: { [key: number]: string } = {
    1: "plastic",
    2: "paper",
    3: "glass",
    4: "metal",
    5: "other", // кожа, резина и ветошь
    6: "organic", // органика
    7: "other", // другие отходы
  };
  return categoryMap[categoryId] || "other";
};

// Функция для преобразования статуса API в статус приложения
const mapApiStatusToAppStatus = (apiStatus: string): string => {
  const statusMap: { [key: string]: string } = {
    Approved: "active",
    "Under review": "pending",
    Rejected: "rejected",
  };
  return statusMap[apiStatus] || "pending";
};

// Service functions
export const getMaterials = async () => {
  try {
    console.log("Fetching materials from API:", API_URL);

    // Получаем материалы только из API
    const response = await fetch(API_URL, {
      // Добавляем случайный параметр для предотвращения кэширования
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    console.log("API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `API request failed with status ${response.status}: ${errorText}`
      );
      throw new Error(`API request failed with status ${response.status}`);
    }

    const apiMaterials = await response.json();
    console.log("Materials from API (raw):", apiMaterials);
    console.log("API response type:", typeof apiMaterials);
    console.log("Is array?", Array.isArray(apiMaterials));

    // Проверяем, является ли ответ массивом
    if (!Array.isArray(apiMaterials)) {
      console.error("API did not return an array:", apiMaterials);

      // Если ответ - объект с вложенным массивом данных, попробуем его извлечь
      if (
        apiMaterials &&
        typeof apiMaterials === "object" &&
        apiMaterials.data &&
        Array.isArray(apiMaterials.data)
      ) {
        console.log(
          "Found data array inside response object:",
          apiMaterials.data
        );
        const processedMaterials = apiMaterials.data.map(
          mapApiMaterialToAppMaterial
        );
        console.log("Processed materials from data array:", processedMaterials);
        return processedMaterials;
      }

      return [];
    }

    // Преобразуем данные API в формат нашего приложения
    const processedMaterials = apiMaterials.map(mapApiMaterialToAppMaterial);

    console.log("Processed materials:", processedMaterials);
    return processedMaterials;
  } catch (error) {
    console.error("Error fetching materials from API:", error);
    // В случае ошибки возвращаем пустой массив
    return [];
  }
};

// Остальные функции остаются без изменений...
export const getAllMaterials = async () => {
  // Используем ту же логику, что и в getMaterials
  return getMaterials();
};

export const getUserMaterials = async (userId: string) => {
  try {
    // Получаем все материалы из API
    const allMaterials = await getMaterials();

    // Фильтруем по userId
    return allMaterials.filter((m: MaterialType) => m.userId === userId);
  } catch (error) {
    console.error("Error fetching user materials:", error);
    return [];
  }
};

export const getMaterialById = async (id: string) => {
  try {
    // Получаем материал из API
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const apiMaterial = await response.json();
    // Преобразуем данные API в формат нашего приложения
    return mapApiMaterialToAppMaterial(apiMaterial);
  } catch (error) {
    console.error("Error fetching material by ID:", error);
    throw new Error("Material not found");
  }
};

export const createMaterial = async (
  material: Omit<MaterialType, "id" | "createdAt" | "status" | "userName">
) => {
  try {
    // Получаем токен авторизации
    const token =
      localStorage.getItem("token") || localStorage.getItem("admin_token");

    // Преобразуем материал в формат API
    const apiMaterial = {
      name: material.name,
      category_id: getCategoryIdFromType(material.type),
      description: material.description,
      price: material.price.toString(),
      unit: "kg",
      image_url: material.image,
      status: "Under review", // Новые материалы имеют статус "Under review"
    };

    // Отправляем материал в API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(apiMaterial),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    // Преобразуем ответ API в формат нашего приложения
    return mapApiMaterialToAppMaterial(responseData);
  } catch (error) {
    console.error("Error creating material:", error);
    throw error;
  }
};

// Функция для преобразования типа материала в category_id
const getCategoryIdFromType = (type: string): number => {
  const typeMap: { [key: string]: number } = {
    plastic: 1,
    paper: 2,
    glass: 3,
    metal: 4,
    other: 7, // Для всех остальных типов используем категорию 7
    organic: 6,
  };
  return typeMap[type] || 7;
};

export const updateMaterialStatus = async (id: string, status: string) => {
  try {
    // Получаем токен авторизации
    const token =
      localStorage.getItem("token") || localStorage.getItem("admin_token");

    // Сначала получаем текущий материал из API
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const currentMaterial = await response.json();

    // Преобразуем статус приложения в статус API
    const apiStatus =
      status === "active"
        ? "Approved"
        : status === "pending"
        ? "Under review"
        : "Rejected";

    // Обновляем статус
    const updatedMaterial = {
      ...currentMaterial,
      status: apiStatus,
    };

    // Отправляем обновленный материал в API
    const updateResponse = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(updatedMaterial),
    });

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      console.error(
        `API request failed with status ${updateResponse.status}: ${errorText}`
      );
      throw new Error(
        `API request failed with status ${updateResponse.status}`
      );
    }

    const result = await updateResponse.json();
    console.log("Material status successfully updated in API:", result);
    // Преобразуем ответ API в формат нашего приложения
    return mapApiMaterialToAppMaterial(result);
  } catch (error) {
    console.error("Failed to update material status in API:", error);
    throw error;
  }
};

export const updateMaterial = async (
  id: string,
  updates: Partial<MaterialType>
) => {
  try {
    // Получаем токен авторизации
    const token =
      localStorage.getItem("token") || localStorage.getItem("admin_token");

    // Сначала получаем текущий материал из API
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const currentMaterial = await response.json();

    // Преобразуем обновления в формат API
    const apiUpdates: any = {};

    if (updates.name !== undefined) apiUpdates.name = updates.name;
    if (updates.type !== undefined)
      apiUpdates.category_id = getCategoryIdFromType(updates.type);
    if (updates.description !== undefined)
      apiUpdates.description = updates.description;
    if (updates.price !== undefined)
      apiUpdates.price = updates.price.toString();
    if (updates.image !== undefined) apiUpdates.image_url = updates.image;
    if (updates.status !== undefined) {
      apiUpdates.status =
        updates.status === "active"
          ? "Approved"
          : updates.status === "pending"
          ? "Under review"
          : "Rejected";
    }

    // Обновляем материал
    const updatedMaterial = {
      ...currentMaterial,
      ...apiUpdates,
    };

    // Отправляем обновленный материал в API
    const updateResponse = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(updatedMaterial),
    });

    if (!updateResponse.ok) {
      throw new Error(
        `API request failed with status ${updateResponse.status}`
      );
    }

    const result = await updateResponse.json();
    // Преобразуем ответ API в формат нашего приложения
    return mapApiMaterialToAppMaterial(result);
  } catch (error) {
    console.error("Failed to update material in API:", error);
    throw error;
  }
};

export const updateMaterialQuantity = async (
  id: string,
  quantityChange: number
) => {
  try {
    // Получаем текущий материал
    const material = await getMaterialById(id);

    // Обновляем количество
    const newQuantity = material.quantity - quantityChange;

    // Используем функцию updateMaterial для обновления
    return updateMaterial(id, { quantity: newQuantity });
  } catch (error) {
    console.error("Failed to update material quantity in API:", error);
    throw error;
  }
};

export const deleteMaterial = async (id: string) => {
  try {
    // Получаем токен авторизации
    const token =
      localStorage.getItem("token") || localStorage.getItem("admin_token");

    // Удаляем материал из API
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    console.log("Material successfully deleted from API");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete material from API:", error);
    throw error;
  }
};

// Функция для получения материалов с фильтрацией
export const getMaterialsByFilter = async (filters: {
  category?: string;
  sort?: string;
}) => {
  try {
    // Получаем все материалы
    const allMaterials = await getMaterials();

    // Применяем фильтры локально
    let filteredMaterials = [...allMaterials];

    if (filters.category && filters.category !== "all") {
      filteredMaterials = filteredMaterials.filter(
        (m) => m.type === filters.category
      );
    }

    if (filters.sort === "price") {
      filteredMaterials.sort((a, b) => a.price - b.price);
    }

    return filteredMaterials;
  } catch (error) {
    console.error("Error fetching filtered materials:", error);
    return [];
  }
};
