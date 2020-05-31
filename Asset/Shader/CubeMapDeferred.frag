#version 330 core

in vec3 vert_world_position;

layout (location = 0) out vec4 frag_ambient;
layout (location = 1) out vec4 frag_normal;
layout (location = 2) out vec4 frag_mra;
layout (location = 3) out vec4 frag_position;

uniform samplerCube Skybox;

void main()
{
	frag_ambient = vec4(texture(Skybox, vert_world_position).rgb, 1.0);
	frag_position = vec3(0.0, 0.0, 0.0);
	frag_mra = vec3(0.0, 0.0, 0.0);
	frag_normal = normalize(vert_world_position);

}
