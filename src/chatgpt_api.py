from chatgpt_api_key import api_key
from ej_formulario import genero, edad, peso, agua_al_dia, enfermedad_preexistente, tiempo_al_sol, actividad_fisica
import openai

openai.api_key = api_key

prompt = f"Soy {genero}. Tengo {edad} años. Peso {peso} kilos. Bebo agua {agua_al_dia}. " \
         f"{enfermedad_preexistente} tengo ninguna enfermedad. Estoy al sol {tiempo_al_sol} al día. " \
         f"{actividad_fisica} realizo actividad física intensa. ¿Puedo sufrir un golpe de calor? ¿Cómo puedo prevenirlo?"

completion = openai.Completion.create(engine='text-davinci-003',
                         prompt=prompt,
                         max_tokens=2048)

print(completion.choices[0].text)