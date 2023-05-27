import Container from "react-bootstrap/Container";
//import { useForm } from "react-hook-form";


export default function App() {



  //  const { register, handleSubmit } = useForm();
  // const onFormSubmit  = data => console.log(data);
  //const onErrors = errors => console.error(errors);




  return (
    <div>
      <Container className="mt-5 pt-5">
        <h1 className="text-center mb-5">Add Blog</h1>


        <form /*onSubmit={handleSubmit(onFormSubmit, onErrors)}*/>
          <div class="mb-3">
            <label for="blogTitle" class="form-label">Blog Title</label>
            <input type="text" class="form-control" aria-describedby="" />
          </div>
          <div class="mb-3">
            <label for="blogDesc" class="form-label">Description</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="blogImg" class="form-label">Image</label>
            <input type="text" class="form-control" />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </Container>

    </div>

  );
}
