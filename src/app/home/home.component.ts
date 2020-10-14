import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootService } from '../shared/root.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../shared/user.model';
import { UserService } from './user.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  editIndex: number;
  editProfileForm: FormGroup;
  userForm: FormGroup;
  usersChanged = new Subject<User[]>();
  private subscription: Subscription;

  constructor(
    private rootService: RootService,
    private userService: UserService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();

    this.subscription = this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );

    this.userForm = this.fb.group({
      username: [''],
      email: [''],
      city: [''],
      phone: [''],
      name: [''],
    });

    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      address: new FormGroup({
        city: new FormControl(null, Validators.required),
      }),
      phone: new FormControl(null, Validators.required),
      company: new FormGroup({
        name: new FormControl(null, Validators.required),
      }),
    });

    this.editProfileForm = this.fb.group({
      id: [''],
      username: [''],
      email: [''],
      city: [''],
      phone: [''],
      company: [''],
    });
  }

  onDelete(index: number) {
    this.userService.onDeleteUser(index);
  }

  openModal(targetModal, user, index) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editProfileForm.patchValue({
      id: user.id,
      username: user.username,
      email: user.email,
      city: user.address.city,
      phone: user.phone,
      company: user.company.name,
    });

    this.editIndex = index;
  }

  onSubmitNewUser() {
    this.userService.addUser(this.userForm.value);
    this.userForm.reset();
  }

  onSubmitEditUser() {
    this.modalService.dismissAll();
    this.userService.editUser(
      this.editProfileForm.getRawValue(),
      this.editIndex
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
