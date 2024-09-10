import os

def get_image_names(folder_path):
    image_names = []
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')
    
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(image_extensions):
            image_names.append(filename)
    
    return image_names

# Example usage
folder_path = './gallery'
images = get_image_names(folder_path)

# Print image names in the desired format
print(', '.join(f"'{image}'" for image in images))