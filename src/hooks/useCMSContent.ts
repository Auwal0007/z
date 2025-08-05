@@ .. @@
 import { useQuery } from '@tanstack/react-query';
 import { Product } from '@shared/schema';
+import { cmsLoader, CMSProduct, CMSCategory, CMSSiteSettings } from '../utils/cmsLoader';

 // Hook for managing CMS content
 export const useCMSContent = () => {
@@ .. @@
     queryKey: ['/api/products/featured'],
   });

+  // CMS-specific queries
+  const { data: cmsProducts = [] } = useQuery<CMSProduct[]>({
+    queryKey: ['cms-products'],
+    queryFn: () => cmsLoader.loadProducts(),
+  });
+
+  const { data: cmsCategories = [] } = useQuery<CMSCategory[]>({
+    queryKey: ['cms-categories'],
+    queryFn: () => cmsLoader.loadCategories(),
+  });
+
+  const { data: siteSettings } = useQuery<CMSSiteSettings>({
+    queryKey: ['cms-settings'],
+    queryFn: () => cmsLoader.loadSiteSettings(),
+  });
+
   const getProductsByCategory = (category: string) => {
@@ .. @@
   return {
     products,
     featuredProducts,
+    cmsProducts,
+    cmsCategories,
+    siteSettings,
     isLoading,
     error,
     getProductsByCategory,