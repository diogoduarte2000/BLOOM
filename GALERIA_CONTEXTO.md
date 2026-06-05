# Galeria — Bloom Living: Documento de Contexto

## Secção

A galeria está na secção **"Designed with intention"** — `<section class="intention" id="gallery">`.  
Contém 9 imagens (`.p1` a `.p9`) dentro de um container `.photo-grid`.

---

## Layout Desktop & iPad (≥ 481px)

### Estrutura de Colunas

| Coluna | Classe CSS | Largura | Tamanho das Imagens |
|--------|-----------|---------|---------------------|
| Esquerda | `p1, p9, p6` | `1fr` | Menores (3 rows × 65px = ~195px) |
| Centro | `p2, p4, p7` | `1.4fr` | **Maiores** (4 rows × 65px = ~260px) |
| Direita | `p3, p5, p8` | `1fr` | Menores (3 rows × 65px = ~195px), offset 1 row |

### Grid CSS (Desktop)

```css
grid-template-columns: 1fr 1.4fr 1fr;
grid-template-rows: repeat(12, 65px);
gap: 0.6rem;
```

### Posicionamento Exacto (Desktop)

```
         Col 1 (1fr)       Col 2 (1.4fr)      Col 3 (1fr)
Row  1   ┌─── p1 ───┐      ┌──── p2 ────┐
Row  2   │          │      │            │     ┌─── p3 ───┐
Row  3   │          │      │            │     │          │
Row  4   └──────────┘      │            │     │          │
         ┌─── p9 ───┐      └────────────┘     └──────────┘
Row  5   │          │      ┌──── p4 ────┐     ┌─── p5 ───┐
Row  6   │          │      │            │     │          │
Row  7   └──────────┘      │            │     │          │
         ┌─── p6 ───┐      │            │     └──────────┘
Row  8   │          │      └────────────┘     ┌─── p8 ───┐
Row  9   │          │      ┌──── p7 ────┐     │          │
Row 10   └──────────┘      │            │     │          │
                            │            │     └──────────┘
Row 11                      │            │
Row 12                      └────────────┘
```

| Item | grid-column | grid-row | Notas |
|------|------------|----------|-------|
| p1   | 1          | 1 / 4    | Esquerda, topo |
| p9   | 1          | 4 / 7    | Esquerda, meio |
| p6   | 1          | 7 / 10   | Esquerda, fundo |
| p2   | 2          | 1 / 5    | Centro, topo — **maior** |
| p4   | 2          | 5 / 9    | Centro, meio — **maior** |
| p7   | 2          | 9 / 13   | Centro, fundo — **maior** |
| p3   | 3          | 2 / 5    | Direita, topo — offset 1 row |
| p5   | 3          | 5 / 8    | Direita, meio |
| p8   | 3          | 8 / 11   | Direita, fundo |

### Efeito de Escalonamento (Stagger)

- **Col 1** começa no row 1
- **Col 2** começa no row 1 (mas as imagens são mais altas — 4 rows)
- **Col 3** começa no row 2 (offset de 1 row para baixo), criando o efeito orgânico de masonry

---

## Layout Tablet (≤ 900px)

Mesmo layout que desktop, mas com rows mais pequenos:

```css
grid-template-columns: 1fr 1.4fr 1fr;
grid-template-rows: repeat(12, 52px);
gap: 0.5rem;
```

Posicionamento idêntico ao desktop.

---

## Layout iPhone/Mobile (≤ 480px)

Layout diferente: **2 colunas** com efeito de escalonamento:

```css
grid-template-columns: 1fr 1.3fr;
grid-template-rows: repeat(6, 130px);
gap: 0.5rem;
```

| Item | grid-column | grid-row |
|------|------------|----------|
| p1   | 1          | 1        |
| p3   | 1          | 2        |
| p5   | 1          | 3        |
| p7   | 1          | 4 / 6    |
| p9   | 1          | 6        |
| p2   | 2          | 1 / 3    |
| p4   | 2          | 3        |
| p6   | 2          | 4 / 6    |
| p8   | 2          | 6        |

---

## Conteúdo das Imagens

| Classe | Descrição | Coluna (desktop) |
|--------|-----------|-----------------|
| `.p1`  | Sala de jantar amarela | Esquerda |
| `.p2`  | Exterior do edifício | Centro |
| `.p3`  | Armazenamento de bicicletas | Direita |
| `.p4`  | Lounge / espaço comum | Centro |
| `.p5`  | Casa de banho | Direita |
| `.p6`  | Corredor com cão | Esquerda |
| `.p7`  | Sala de estar com TV | Centro |
| `.p8`  | Quarto | Direita |
| `.p9`  | Lavandaria / corredor azul | Esquerda |

---

## Comportamento Hover

Cada imagem tem um efeito de zoom suave ao hover:

```css
.photo-grid > div:hover img {
    transform: scale(1.04);
}
```

Transição de `0.4s` para suavidade.

---

## Ficheiros a Substituir

Os placeholders de texto devem ser substituídos por imagens reais com o atributo `src`:

```html
<!-- Exemplo: -->
<div class="p1">
    <img src="images/gallery-1.jpg" alt="Yellow dining room">
</div>
```

Os ficheiros devem estar numa pasta `images/` na raiz do projecto.
